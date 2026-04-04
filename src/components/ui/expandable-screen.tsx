"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

// Context
interface ExpandableScreenContextValue {
  isExpanded: boolean
  expand: () => void
  collapse: () => void
  layoutId: string
  triggerRadius: string
  contentRadius: string
  animationDuration: number
  variant: "fullscreen" | "window"
}

const ExpandableScreenContext =
  createContext<ExpandableScreenContextValue | null>(null)

function useExpandableScreen() {
  const context = useContext(ExpandableScreenContext)
  if (!context) {
    throw new Error(
      "useExpandableScreen must be used within an ExpandableScreen"
    )
  }
  return context
}

// Root Component
interface ExpandableScreenProps {
  children: ReactNode
  defaultExpanded?: boolean
  onExpandChange?: (expanded: boolean) => void
  layoutId?: string
  triggerRadius?: string
  contentRadius?: string
  animationDuration?: number
  lockScroll?: boolean
  variant?: "fullscreen" | "window"
}

export function ExpandableScreen({
  children,
  defaultExpanded = false,
  onExpandChange,
  layoutId = "expandable-card",
  triggerRadius = "100px",
  contentRadius = "24px",
  animationDuration = 0.4,
  lockScroll = true,
  variant = "fullscreen",
}: ExpandableScreenProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  const expand = () => {
    setIsExpanded(true)
    onExpandChange?.(true)
  }

  const collapse = () => {
    setIsExpanded(false)
    onExpandChange?.(false)
  }

  useEffect(() => {
    if (lockScroll) {
      if (isExpanded) {
        document.body.style.overflow = "hidden"
        window.dispatchEvent(new CustomEvent('expandable-state-change', { detail: { isExpanded: true } }))
      } else {
        document.body.style.overflow = "unset"
        window.dispatchEvent(new CustomEvent('expandable-state-change', { detail: { isExpanded: false } }))
      }
    }

    const handler = () => {
      setIsExpanded(false)
      onExpandChange?.(false)
    }
    window.addEventListener('close-expandables', handler)
    
    return () => {
      window.removeEventListener('close-expandables', handler)
    }
  }, [isExpanded, lockScroll, onExpandChange])

  return (
    <ExpandableScreenContext.Provider
      value={{
        isExpanded,
        expand,
        collapse,
        layoutId,
        triggerRadius,
        contentRadius,
        animationDuration,
        variant,
      }}
    >
      {children}
    </ExpandableScreenContext.Provider>
  )
}

// Trigger Component
interface ExpandableScreenTriggerProps {
  children: ReactNode
  className?: string
}

export function ExpandableScreenTrigger({
  children,
  className = "",
}: ExpandableScreenTriggerProps) {
  const { isExpanded, expand, triggerRadius } = useExpandableScreen()

  return (
    <AnimatePresence initial={false}>
      {!isExpanded && (
        <motion.div
          className={`inline-block relative ${className}`}
          onClick={expand}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          layout
        >
          <motion.div
            style={{ borderRadius: triggerRadius }}
            className="relative cursor-pointer h-full w-full flex flex-col"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Content Component
interface ExpandableScreenContentProps {
  children: ReactNode
  className?: string
}

export function ExpandableScreenContent({
  children,
  className = "",
}: ExpandableScreenContentProps) {
  const { isExpanded, collapse, contentRadius, animationDuration, variant } =
    useExpandableScreen()

  return createPortal(
    <AnimatePresence>
      {isExpanded && (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden p-4 md:p-6`}>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration }}
            onClick={variant === "window" ? collapse : undefined}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
            style={{ zIndex: 5 }}
          />

          {/* Actual content container */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ 
              duration: animationDuration,
              ease: [0.22, 1, 0.36, 1] 
            }}
            style={{
              borderRadius: variant === "window" ? contentRadius : "0px",
              zIndex: 10,
            }}
            data-lenis-prevent
            className={`
              relative flex flex-col transform-gpu will-change-transform bg-background
              ${variant === "fullscreen" 
                ? "h-full w-full md:rounded-none rounded-[32px]" 
                : "h-full md:h-[80vh] w-full max-w-3xl shadow-2xl overflow-hidden md:rounded-3xl rounded-[32px]"
              }
              ${className}
            `}
          >
            {/* Conditional 'X' button for windowed mode */}
            {variant === "window" && (
              <button
                onClick={collapse}
                className="absolute right-4 top-4 z-[30] flex h-8 w-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-md hover:bg-black/40 transition-colors"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            <div className="flex-1 overflow-y-auto w-full">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

// Background Component (optional)
interface ExpandableScreenBackgroundProps {
  trigger?: ReactNode
  content?: ReactNode
  className?: string
}

export function ExpandableScreenBackground({
  trigger,
  content,
  className = "",
}: ExpandableScreenBackgroundProps) {
  const { isExpanded } = useExpandableScreen()

  if (isExpanded && content) {
    return <div className={className}>{content}</div>
  }

  if (!isExpanded && trigger) {
    return <div className={className}>{trigger}</div>
  }

  return null
}

export { useExpandableScreen }
