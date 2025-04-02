import React, { FunctionComponent, PropsWithChildren, useContext } from 'react'
import {
  Permission,
  Role,
  SecureComponentProps,
  SecurityProviderProps
} from './interface'

declare type SecurityContextType = {
  permissions: Permission[]
  roles: Role[]
}

declare type SecurityContextMethodsType = {
  hasPermissions: (permissions?: string[]) => boolean
  hasRoles: (roles?: string[]) => boolean
}

const SecurityContext = React.createContext<
  SecurityContextType & SecurityContextMethodsType
>({
  permissions: [],
  roles: [],
  hasPermissions: () => false,
  hasRoles: () => false
})

export const SecureComponent: FunctionComponent<
  SecureComponentProps & PropsWithChildren<any>
> = ({ permissions, roles, children }) => {
  return (
    <SecurityContext.Consumer>
      {(value) => (
        <React.Fragment>
          {(!!value?.hasPermissions(permissions) || value.hasRoles(roles)) && (
            <React.Fragment>{children}</React.Fragment>
          )}
        </React.Fragment>
      )}
    </SecurityContext.Consumer>
  )
}

export const SecurityProvider: FunctionComponent<
  SecurityProviderProps & PropsWithChildren<any>
> = ({ roles = [], permissions = [], children }) => {
  const hasRole = (value: string): boolean => {
    return roles.some((role: Role) => role.name === value)
  }

  const hasRoles = (values?: string[]): boolean => {
    if (!values) {
      return false
    }

    return values.some((value: string) => hasRole(value))
  }

  const hasPermission = (value: string): boolean => {
    return permissions.some(
      (permission: Permission) => permission.name === value
    )
  }

  const hasPermissions = (values?: string[]) => {
    if (!values) {
      return false
    }

    return values.some((value: string) => hasPermission(value))
  }

  return (
    <SecurityContext.Provider
      value={{
        permissions: permissions,
        roles: roles,
        hasPermissions: hasPermissions,
        hasRoles: hasRoles
      }}
    >
      {children}
    </SecurityContext.Provider>
  )
}

export function useSecurity(): SecurityContextMethodsType {
  const context = useContext(SecurityContext)

  if (context === undefined) {
    throw new Error('useSecurity must be used within a SecurityProvider')
  }
  return { hasPermissions: context.hasPermissions, hasRoles: context.hasRoles }
}
