import React, { useContext, useState } from "react"
import { ThemeContext } from "../theme-provider"
import {
  Avatar,
  Button,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react"
import { FaRegMoon, FaUsers } from "react-icons/fa"
import { LuSunMedium } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import {
  logout,
  selectCurrent,
  selectIsAuthenticated,
} from "../../features/user/userSlice"
import { Link, useNavigate } from "react-router-dom"
import { CiLogout } from "react-icons/ci"
import { NavButton } from "../nav-button"
import { BsLightbulb, BsPersonLinesFill, BsPostcard } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { BASE_URL } from "../../constants"

export const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const { theme, toggleTheme } = useContext(ThemeContext)
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const current = useSelector(selectCurrent)

  if (!current) {
    return null
  }

  const { name, email, avatarUrl, id } = current

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/auth")
  }

  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">CSA</p>
      </NavbarBrand>
      {/* <NavbarItem
        className="lg:flex text-3xl cursor-pointer"
        onClick={() => toggleTheme()}
      >
        {theme === "light" ? <FaRegMoon /> : <LuSunMedium />}
      </NavbarItem> */}

      {/* <NavbarItem>
        {isAuthenticated && (
          <Button
            color="default"
            variant="flat"
            className="gap-2"
            onClick={handleLogout}
          >
            <CiLogout /> <span>Выйти</span>
          </Button>
        )}
      </NavbarItem> */}

      <NavbarContent className="mt-5 cursor-pointer" as="div" justify="end">
        <div className="flex-col cursor-default">
          <h4 className="font-bold text-large mb-2 text-end">{name}</h4>

          <p className="font-semibold">{email}</p>
        </div>
        <Dropdown
          placement="bottom-end"
          backdrop="blur"
          className={`${theme} text-foreground`}
        >
          <DropdownTrigger>
            <Avatar
              isBordered
              className="transition-transform"
              color="success"
              name={name}
              size="lg"
              src={`${BASE_URL}${avatarUrl}`}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="faded">
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              href={`/users/${id}`}
            >
              <div className="flex items-center gap-4 ">
                <p className="font-semibold justify-end">{name}</p>
                <p className="font-semibold">{email}</p>
                <Avatar
                  isBordered
                  radius="sm"
                  color="primary"
                  size="lg"
                  src={`${BASE_URL}${avatarUrl}`}
                />
              </div>
            </DropdownItem>
            <DropdownSection showDivider>
              <DropdownItem key="profile" href={`/`}>
                Главная
              </DropdownItem>
              <DropdownItem key="profile" href={`/users`}>
                Пользователи
              </DropdownItem>
              <DropdownItem key="profile" href={`/users/${id}`}>
                Мой профиль
              </DropdownItem>
              <DropdownItem key="posts" href="/posts">
                Посты
              </DropdownItem>
              <DropdownItem key="analytics" href="/followers">
                Подписчики
              </DropdownItem>
              <DropdownItem key="system" href="/following">
                Подписки
              </DropdownItem>
              <DropdownItem key="system" href="/info">
                Инфо
              </DropdownItem>
            </DropdownSection>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem
              isReadOnly
              key="theme"
              className="cursor-default"
              endContent={
                <select
                  className="z-10 outline-none w-16 py-0.5 rounded-md text-tiny group-data-[hover=true]:border-default-500 border-small border-default-300 dark:border-default-200 bg-transparent text-default-500"
                  id="theme"
                  name="theme"
                  onChange={() => toggleTheme()}
                >
                  <option value={theme}>Dark</option>

                  <option value={theme}>Light</option>
                </select>
              }
            >
              {" "}
              <div className="flex gap-2">
                Theme {theme === "light" ? <LuSunMedium /> : <FaRegMoon />}
              </div>
            </DropdownItem>
            <DropdownSection aria-label="Profile & Actions" showDivider>
              <DropdownItem onClick={handleLogout} key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}
