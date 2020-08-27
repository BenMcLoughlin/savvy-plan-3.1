import React, { FC, useEffect, useRef } from "react"
import styled from "styled-components"
import { ChartNav } from "components"
import { getSavings } from "calculations/savings/savings.function"
import { drawAreaChart } from "charts/createChartFunctions/createAreaChart"
import { drawBarChart } from "charts/createChartFunctions/createBarChart"
import { getSavingsData } from "calculations/savings/create/createChartArray"

interface IProps {
  state: any
  color_selector: any
  set: (id: string, reducer: string, value: any, childId?: string) => void
}

export const SavingsChart: FC<IProps> = ({ color_selector, state, set }) => {
  const dataObject = getSavings(state)

  const { areaData, barData } = getSavingsData(state, dataObject)
  console.log("areaData:", areaData)
  color_selector = { ...color_selector, user2rrsp: "#F29278" }

  const { selectedUser } = state.ui_reducer

  const inputAreaRef = useRef(null)
  const inputBarRef = useRef(null)

  const areaClassName = "savingsAreaChart"
  const barClassName = "savingsBarChart"

  useEffect(() => {
    if (inputAreaRef && inputAreaRef.current) {
      const areaWidth = inputAreaRef.current.offsetWidth
      const areaHeight = inputAreaRef.current.offsetHeight
      const barWidth = inputBarRef.current.offsetWidth
      const barHeight = inputBarRef.current.offsetHeight
      drawAreaChart(color_selector, areaClassName, areaData, dataObject, areaHeight, set, state, areaWidth)
      drawBarChart(color_selector, barClassName, barData, dataObject, barHeight, set, state, barWidth)
    }
  }, [dataObject, set, state])

  return (
    <Wrapper>
      <AreaCanvas className={areaClassName} ref={inputAreaRef} />
      <BarCanvas className={barClassName} ref={inputBarRef} />
      <ChartNavWrapper>
        <ChartNav options={["tfsa", "rrsp", "personal", "combined"]} handleChange={value => set("selectedAccount", "ui_reducer", value)} value={state.ui_reducer.selectedAccount} />
      </ChartNavWrapper>
    </Wrapper>
  )
}

//---------------------------STYLES-------------------------------------------//

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70rem;
  position: relative;
`

const AreaCanvas = styled.div`
  width: 90rem;
  height: 17rem;
  position: absolute;
  top: 12rem;
  left: -5em;
`
const BarCanvas = styled.div`
  width: 90rem;
  height: 9rem;
  position: absolute;
  top: 23.5rem;
  left: -5em;
`
const ChartNavWrapper = styled.div`
  position: absolute;
  top: 10rem;
  left: 4rem;
`

// {/* <ChartNavWrapper>
// <ChartNav options={["tfsa", "rrsp", "nopersonal", "combined"]} id={"selectedAccount"} reducer={"ui_reducer"} />
// </ChartNavWrapper> */}
