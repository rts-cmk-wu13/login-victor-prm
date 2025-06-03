import type { ReactNode } from "react";

type PageContainerProps = {
    children?: ReactNode;
};


export default function PageContainer({ children }: PageContainerProps) {
    return (
        <>
            <div className="font-dmsans grid grid-rows-[120px_50%_1fr] gap-4 h-screen max-w-screen-md mx-auto">
                {children ? children : (
                    <>
                        <div className="bg-red-300">Row 1 — 120px</div>
                        <div className="bg-blue-300">Row 2 — 50%</div>
                        <div className="bg-green-300">Row 3 — fills remaining space</div>
                    </>)}

            </div>
        </>
    )
}