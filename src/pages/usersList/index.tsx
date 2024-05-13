import React from "react"
import { useGetAllUsersQuery } from "../../app/services/userApi"
import { UserList } from "../../components/user-list"

export const UsersList = () => {
  const { data } = useGetAllUsersQuery()

  return (
    <>
      {data && data.length > 0
        ? data.map(
            ({ id, name, email, createdAt, bio, location, avatarUrl }) => (
              <UserList
                key={id}
                id={id}
                avatarUrl={avatarUrl ?? ""}
                name={name ?? ""}
                email={email ?? ""}
                createdAt={createdAt}
                bio={bio ?? ""}
                location={location ?? ""}
              />
            ),
          )
        : null}
    </>
  )
}
