import { HTMLAttributes } from "react"
export default function Error({children, className, ...props}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`mt-2 text-sm text-red-600 dark:text-red-500 trucate ${className}`} {...props}>{children}</p>
  )
}
