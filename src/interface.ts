export declare type Role = {
  name: string
  [key: string]: any
}

export declare type Permission = {
  name: string
  [key: string]: any
}

export interface SecurityProviderProps {
  roles?: Role[]
  permissions?: Permission[]
}

export interface SecureComponentProps {
  permissions?: string[]
  roles?: string[]
}
