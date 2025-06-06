import PageContainer from "../components/PageContainer"
import Header from "../components/HeaderComp/Header"
import SecretsMain from "../components/SecretsComp/SecretsMain"
import SecretsItem from "../components/SecretsComp/SecretsItem"
import { useLoaderData } from "react-router"
import type { SecretProps } from "../types/types"

export default function Secrets() {
    let data: SecretProps[] = useLoaderData();
    //console.log(data)

    return (
        //data={{ ...item, index }} is a way of integrating index with the rest of the card object (remember to include the index in the object shape in SecretProps as well)
        <>
            <PageContainer>
                <Header title="Secrets" />
                <SecretsMain>
                    {data && data.map((item,index)=> (<SecretsItem key={index} data={{ ...item, index }}/>))}
                </SecretsMain>
            </PageContainer>
        </>
    )
}
