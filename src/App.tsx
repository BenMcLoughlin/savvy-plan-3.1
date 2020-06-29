import React from "react"
import styled from "styled-components"
import Header from "components/Header"
import Footer from "components/Footer"
import { ThemeProvider } from "styled-components"
import { theme } from "styles/theme"
import { Onboard, Layout } from "HOC/connectRedux_HOC"
import { Route } from "react-router-dom"
import { LandingPage } from "pages/landingPage/LandingPage"
import { BrowserRouter } from "react-router-dom"
import { onboard_data } from "data/wizard/wizard_data"

interface IProps {
  state: any
  set: (id: string, reducer: string, value: any, childId?: string) => void
  remove: (id: string) => void
}

export const App = ({ remove, state, set }) => {
  const { progress } = state.ui_reducer

  const data = onboard_data(state, set, progress, remove)

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Content>
          <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route path="/onboarding" render={() => <Onboard data={data} />} />
            <Route exact path="/Plan" component={Layout} />
          </BrowserRouter>
        </Content>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  min-height: 90vh;
  min-width: 100vh;
`
const Content = styled.div`
background: #FFFFFF;
background: -webkit-radial-gradient(center, #FFFFFF, #F3F3F2);
background: -moz-radial-gradient(center, #FFFFFF, #F3F3F2);
background: radial-gradient(ellipse at center, #FFFFFF, #F3F3F2);
  height: 90rem;
  width: 100%;
`
//background: radial-gradient(circle, rgba(227, 229, 230, 1) -20%, rgba(226, 226, 226, 1) 350%);

// GREEN
// background: #FFFFFF;
// background: -webkit-linear-gradient(left, #FFFFFF, #D3DAD8);
// background: -moz-linear-gradient(left, #FFFFFF, #D3DAD8);
// background: linear-gradient(to right, #FFFFFF, #D3DAD8);

// GREY
// background: -webkit-radial-gradient(top left, #FFFFFF, #DDDCDC);
// background: -moz-radial-gradient(top left, #FFFFFF, #DDDCDC);
// background: radial-gradient(to bottom right, #FFFFFF, #DDDCDC);

//GREY GREEN LINEAR
// background: #FFFFFF;
// background: -webkit-linear-gradient(left, #FFFFFF, #E8ECEB);
// background: -moz-linear-gradient(left, #FFFFFF, #E8ECEB);
// background: linear-gradient(to right, #FFFFFF, #E8ECEB);

//GREY RADIAL
// background: #FFFFFF;
// background: -webkit-radial-gradient(center, #FFFFFF, #F3F3F2);
// background: -moz-radial-gradient(center, #FFFFFF, #F3F3F2);
// background: radial-gradient(ellipse at center, #FFFFFF, #F3F3F2);