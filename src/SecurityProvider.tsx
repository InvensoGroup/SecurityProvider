import React, { FunctionComponent } from "react";

declare type SecurityContextType = {
  permissions: Permission[];
  roles: Role[];
  hasPermissions: (permissions?: string[]) => boolean;
  hasRoles: (roles?: string[]) => boolean
}
const SecurityContext = React.createContext<SecurityContextType>({
  permissions: [],
  roles: [],
  hasPermissions: () => false,
  hasRoles: () => false
});

export declare type Role = {
  name: string;
  [key: string]: any;
}

export declare type Permission = {
  name: string;
  [key: string]: any;
}

export const SecureComponent: FunctionComponent<{
  permissions?: string[],
  roles?: string[]
}> = ({permissions, roles, children}) => {
  return (
    <SecurityContext.Consumer>
      {value => (
        <React.Fragment>
          {(!!value?.hasPermissions(permissions) || value.hasRoles(roles)) && (
            <React.Fragment>
              {children}
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </SecurityContext.Consumer>
  );
}

export const SecurityProvider: FunctionComponent<{
  roles?: Role[];
  permissions?: Permission[];
}> = ({roles = [], permissions = [], children}) => {

  const hasRole = (value: string): boolean => {
    return roles.some((role: Role) => role.name === value);
  }

  const hasRoles = (values?: string[]): boolean => {
    if(!values) {
      return false;
    }

    return values.some((value: string) => hasRole(value));
  }

  const hasPermission = (value: string): boolean => {
    return permissions.some((permission: Permission) => permission.name === value);
  }

  const hasPermissions = (values?: string[]) => {
    if(!values) {
      return false;
    }

    return values.some((value: string) => hasPermission(value));
  }

  return (
    <SecurityContext.Provider value={{permissions: permissions, roles: roles, hasPermissions: hasPermissions, hasRoles: hasRoles}}>
      {children}
    </SecurityContext.Provider>
  );
}
