import Permissions from 'react-native-permissions';
import AsyncStorage from '@react-native-community/async-storage';

import AlertSettings from '@/utils/AlertSettings';
import { permissionConstants, permissionStatuses } from '@/configs/Constants';

export const PermissionRequestedStatus = async (name) => {
  const status = await AsyncStorage.getItem(name);

  if (!status) {
    await AsyncStorage.setItem(name, JSON.stringify(true));
  }

  return status;
};

const PermissionCheck = async (service) => {
  const { [service]: serviceName } = permissionConstants;

  const permissionStatus = await Permissions.check(serviceName);

  if (permissionStatus !== permissionStatuses.authorized) {
    AlertSettings(service);
  }
};

export default PermissionCheck;
