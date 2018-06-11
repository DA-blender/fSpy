export enum PrincipalPointMode1VP {
  Default = 'Default',
  Manual = 'Manual'
}

export enum PrincipalPointMode2VP {
  Default = 'Default',
  Manual = 'Manual',
  FromThirdVanishingPoint = 'FromThirdVanishingPoint'
}

export enum HorizonMode {
  Default = 'Default',
  Manual = 'Manual'
}

export enum Axis {
  PositiveX = 'xPositive',
  NegativeX = 'xNegative',
  PositiveY = 'yPositive',
  NegativeY = 'yNegative',
  PositiveZ = 'zPositive',
  NegativeZ = 'zNegative'
}

export enum ReferenceDistanceUnit {
  None = 'No unit',
  Meters = 'Meters',
  Yards = 'Yards'
}

export interface CameraData {
  presetId: string | null
  customSensorWidth: number
  customSensorHeight: number
}

export interface CalibrationSettingsBase {
  referenceDistanceUnit: ReferenceDistanceUnit
  referenceDistance: number
  referenceDistanceAxis: Axis | null
  cameraData: CameraData
}

export interface CalibrationSettings1VP {
  principalPointMode: PrincipalPointMode1VP
  vanishingPointAxis: Axis
  upAxis: Axis
  horizonMode: HorizonMode
  absoluteFocalLength: number
}

export interface CalibrationSettings2VP {
  principalPointMode: PrincipalPointMode2VP
  quadModeEnabled: boolean
  vanishingPointAxes: [Axis, Axis]
}