import type { SecretProps } from "../../types/types"

type SecretsItemProps = {
    data: SecretProps;
};

export default function SecretsItem({ data }: SecretsItemProps) {
    console.log(data)

    let align = data.index % 2 === 0 ? "mr-auto" : "ml-auto"

    return (
        <div className={`rounded-[24px] shadow-1 max-w-[66%] flex flex-col gap-y-4 p-4 ${align}`}>
            <h2 className="text-lg">{data.quote}</h2>
            <div className="ml-auto text-right">
                <p className="italic font-semibold text-gray-500">{data.author}</p>
                <small className="text-gray-400">{data.origin}</small>
            </div>
        </div>
    )
}