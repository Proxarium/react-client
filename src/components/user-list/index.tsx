import React from "react"

import { CardBody, CardHeader, Card as NextUiCard } from "@nextui-org/react"
import { Link } from "react-router-dom"
import { User } from "../user"
import { formatToClientDate } from "../../utils/format-to-client-date"
import { Typography } from "../typography"

type Props = {
  id?: string
  name: string
  email: string
  createdAt?: Date
  bio?: string
  location?: string
  avatarUrl?: string
}

export const UserList: React.FC<Props> = ({
  name = "",
  id = "",
  email = "",
  createdAt,
  bio = "",
  location = "",
  avatarUrl = "",
}) => {
  return (
    <>
      <div className="items-stretch gap-4">
        <NextUiCard className="mb-5">
          <CardHeader className="justify-between items-center">
            <Link to={`/users/${id}`}>
              <User
                name={name}
                className="test-small font-semibold leading-none text-default-600"
                avatarUrl={avatarUrl}
                description={createdAt && formatToClientDate(createdAt)}
              />
            </Link>
          </CardHeader>
          <CardBody className="px-3 py-2 mb-5">
            <Typography>{bio}</Typography>
            <Typography>{email}</Typography>
            <Typography>{location}</Typography>
          </CardBody>
        </NextUiCard>
      </div>
    </>
  )
}
