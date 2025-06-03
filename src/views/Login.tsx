import PageContainer from "../components/PageContainer"
import Header from "../components/HeaderComp/Header"
import LoginMain from "../components/LoginComp/LoginMain"
import LoginBottom from "../components/LoginComp/LoginBottom"


export default function Login() {
  return (
    <>
      <PageContainer>
        <Header title="Login"/>
        <LoginMain/>
        <LoginBottom/>
      </PageContainer>
    </>
  )
}
