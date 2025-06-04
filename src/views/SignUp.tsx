
import PageContainer from "../components/PageContainer"
import Header from "../components/HeaderComp/Header"
import SignupMain from "../components/SignupComp/SignupMain"
import SignupBottom from "../components/SignupComp/SignupBottom"

export default function Signup() {
  return (
    <>
      <PageContainer>
        <Header title="Signup" />
        <SignupMain />
        <SignupBottom />
      </PageContainer>
    </>
  )
}
