import { exit } from 'process';

export const checkWorkspace = async () => {
  console.log('demo task');
  return;
};

checkWorkspace().then(() => exit());
