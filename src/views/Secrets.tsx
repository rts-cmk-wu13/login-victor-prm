import PageContainer from "../components/PageContainer"
import Header from "../components/HeaderComp/Header"
import SecretsMain from "../components/SecretsComp/SecretsMain"

export default function Secrets() {
    return (
        <>
            <PageContainer>
                <Header title="Secrets" />
                <SecretsMain></SecretsMain>
            </PageContainer>
        </>
    )
}
