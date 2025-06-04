import PageContainer from "../components/PageContainer"
import Header from "../components/HeaderComp/Header"
import SecretsMain from "../components/SecretsComp/SecretsMain"
import { useLoaderData } from "react-router"


export default function Secrets() {
    let data = useLoaderData();
    console.log(data)

    return (
        <>
            <PageContainer>
                <Header title="Secrets" />
                <SecretsMain></SecretsMain>
            </PageContainer>
        </>
    )
}
