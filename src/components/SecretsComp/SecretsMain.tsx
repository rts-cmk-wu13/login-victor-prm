import type { PageContainerProps } from "../../types/types"

export default function SecretsMain({ children }: PageContainerProps) {
    return (
        <>
            <div className="flex flex-col gap-4">
                {children}
            </div>
        </>
    )
}