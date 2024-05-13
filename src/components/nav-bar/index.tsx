import React from "react"
import { BsLightbulb, BsPersonLinesFill, BsPostcard } from "react-icons/bs"
import { FaUsers } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { NavButton } from "../nav-button"

export const NavBar: React.FC = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-5">
        <li>
          <NavButton href="users" icon={<BsPersonLinesFill />}>
            Пользователи
          </NavButton>
        </li>
        <li>
          <NavButton href="/" icon={<BsPostcard />}>
            Посты
          </NavButton>
        </li>
        <li>
          <NavButton href="following" icon={<FiUsers />}>
            Подписки
          </NavButton>
        </li>
        <li>
          <NavButton href="followers" icon={<FaUsers />}>
            Подписчики
          </NavButton>
        </li>
        <li>
          <NavButton href="info" icon={<BsLightbulb />}>
            Info
          </NavButton>
        </li>
      </ul>
    </nav>
  )
}
