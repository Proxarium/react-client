import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  useDisclosure,
} from "@nextui-org/react"
import React from "react"
import kung from "../../assets/kung.png"
import rscuepack from "../../assets/rescuepackmain.png"
import { AcceptBrigade } from "../../components/accept-brigade"
import { Link } from "react-router-dom"

export const MainPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 pt-2 justify-center h-[190px]">
        <Card
          isPressable
          isFooterBlurred
          isBlurred
          fullWidth
          radius="lg"
          className="border-none"
        >
          <Image
            alt="Бригады"
            className="object-cover justify-center scale-105"
            src={kung}
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            {/* <p className="text-tiny text-white/80">Available soon.</p> */}
            <Button
              className="text-tiny text-white bg-black/20 "
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
              onClick={() => onOpen()}
            >
              Принять бригаду
            </Button>
          </CardFooter>
        </Card>
        <Card
          isFooterBlurred
          isBlurred
          isPressable
          radius="lg"
          className="border-none"
        >
          <Image
            alt="Вылеты"
            className="object-cover justify-center scale-105"
            src={rscuepack}
          />
          <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <Button
              className=" text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              Принять вылет
            </Button>
          </CardFooter>
        </Card>
      </div>
      <AcceptBrigade isOpen={isOpen} onClose={onClose} />
      <div className="flex flex-row">
        <Image alt="brigade" src={kung} width={180}></Image>
        <Image alt="brigade" src={rscuepack} width={180}></Image>
      </div>
      <div className="grid grid-flow-col gap-2">
        <div className="">
          <Link to="/brigade">
            <Button
              className="w-full"
              color="default"
              variant="bordered"
              href="/brigade"
            >
              Принять бригаду
            </Button>
          </Link>
        </div>
        <div className="">
          <Button className="w-full" color="default" variant="bordered">
            Принять вылет
          </Button>
        </div>
      </div>
      <div className="pt-2">
        <Button className="w-full" color="default" variant="bordered">
          Принять ЭКМО
        </Button>
      </div>
      <div className="pt-2">
        <Button className="w-full" color="default" variant="bordered">
          Написать рецепт
        </Button>
      </div>
      <div className="flex flex-row gap-2 pt-2">
        <Button className="w-full" color="primary" variant="solid">
          Dashboard
        </Button>
        <Button className="w-full" color="default" variant="bordered">
          Документы
        </Button>
      </div>
      <div className="flex flex-row gap-2 pt-2">
        <Button className="w-full" color="primary" variant="solid">
          Новости ФЦМК
        </Button>
        <Button className="w-full" color="default" variant="bordered">
          Календарь
        </Button>
      </div>
    </>
  )
}
