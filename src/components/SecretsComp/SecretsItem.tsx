import type { SecretProps } from "../../types/types"

type SecretsItemProps = {
    data: SecretProps;
};

export default function SecretsItem({ data }: SecretsItemProps) {
    console.log(data)

    let align = data.index%2===0 ? "mr-auto" : "ml-auto"

    return (
        <div className={`rounded-[24px] shadow-1 max-w-[66%] flex flex-col gap-y-4 p-4 ${align}`}>
            <h2 className="text-lg">{data.quote}</h2>
            <div className="ml-auto text-right text-gray-400">
                <p className="italic">{data.author}</p>
                <small>{data.origin}</small>
            </div>
        </div>
    )
}