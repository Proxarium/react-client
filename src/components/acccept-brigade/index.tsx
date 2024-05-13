import {
  Avatar,
  Select as SelectBrigade,
  SelectItem,
  SelectedItems,
} from "@nextui-org/react"
import pack from "../../assets/ysmp.png"

import React, { useContext } from "react"
import { Brigade } from "../../app/types"
import { useGetAllBrigadeQuery } from "../../app/services/brigadeApi"

export const AccceptBrigade = () => {
  const { data } = useGetAllBrigadeQuery()

  return (
    <>
      {/* <SelectBrigade label="Выберите бригаду" className="max-w-xs">
        <SelectItem key={id} value={id}>
          {nomerBrigadi}
        </SelectItem>
      </SelectBrigade> */}

      <SelectBrigade
        items={data}
        label="Выберите бригаду"
        placeholder="Выберите бригаду"
        labelPlacement="outside"
        classNames={{
          base: "max-w-xs",
          trigger: "h-12",
        }}
        renderValue={(items: SelectedItems<Brigade>) => {
          return items.map(item => (
            <div key={item.key} className="flex items-center gap-2">
              <Avatar
                alt={pack}
                className="flex-shrink-0"
                size="sm"
                src={pack}
              />
              <div className="flex flex-col">
                <span>{item.data?.nomerBrigadi}</span>
                <span className="text-default-500 text-tiny">
                  ({item.data?.id})
                </span>
              </div>
            </div>
          ))
        }}
      >
        {brigade => (
          <SelectItem key={brigade.id} textValue={brigade.nomerBrigadi}>
            <div className="flex gap-2 items-center">
              <Avatar
                alt={pack}
                className="flex-shrink-0"
                size="sm"
                src={pack}
              />
              <div className="flex flex-col">
                <span className="text-small">{brigade.nomerBrigadi}</span>
                <span className="text-tiny text-default-400">{brigade.id}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </SelectBrigade>
    </>
  )
}
