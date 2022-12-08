export interface User {
  id: number
  userName: string
  userPassword: string
  name: string
  email: string
  improveTeamMember: boolean
  supervisor: boolean
  receiveAutonomousWarning: boolean
  loginExpiration: number
  disabled: boolean
  system: string
  unitId: number
}
