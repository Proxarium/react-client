import {
  Avatar,
  Select,
  Select as SelectBrigade,
  SelectItem,
  SelectedItems,
} from "@nextui-org/react"

import React, { useContext } from "react"

import { useGetAllBrigadeQuery } from "../../app/services/brigadeApi"
import { AccceptBrigade } from "../../components/acccept-brigade"
import { ThemeContext } from "../../components/theme-provider"

export const AcceptBrigadePage = () => {
  const { theme } = useContext(ThemeContext)
  // const { data } = useGetAllBrigadeQuery()

  

  // if (!data) {
  //   return <div>Loading...</div>
  // }

  return (
    <>
      {/* <Select placeholder="Выберите бригаду" className={`${theme}`}>
        {data.map(brigade => (
          <SelectItem
            className={`${theme}`}
            key={brigade.id}
            value={brigade.id}
          >
            {brigade.nomerBrigadi}
          </SelectItem>
        ))}
      </Select> */}
    </>
  )
}
