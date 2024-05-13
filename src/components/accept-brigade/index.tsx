import React, { useContext } from "react"
import { ThemeContext } from "../theme-provider"
import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
  Image,
} from "@nextui-org/react"

import { useGetAllBrigadeQuery} from "../../app/services/brigadeApi"



type Props = {
  isOpen: boolean
  onClose: () => void
  
  
}

export const AcceptBrigade: React.FC<Props> = ({ isOpen, onClose, }) => {
  const { theme } = useContext(ThemeContext)
  const { data } = useGetAllBrigadeQuery()



  const [modalPlacement] = React.useState("bottom")


  if (!data) {
    return <div>Loading...</div>
  }
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      //   onOpenChange={onOpenChange}
      className={`${theme} text-foreground`}
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Принять бригаду
            </ModalHeader>

            <ModalBody>
              <form className={`${theme} text-foreground`}>
            <Select placeholder="Выберите бригаду" labelPlacement="outside-left" className={`${theme}`}>
        {data.map((brigade) => (
          <SelectItem
            className={`${theme}`}
            key={brigade.id}
            value={brigade.id}
          >
            {brigade.nomerBrigadi}
          </SelectItem>
        ))}
      </Select>

      <Select placeholder="Выберите АСМП" className="mt-5">
        <SelectItem key={1} className="">
        
        </SelectItem>

      </Select>
      </form>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Закрыть
              </Button>
              <Button color="primary" onPress={onClose}>
                Принять
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
