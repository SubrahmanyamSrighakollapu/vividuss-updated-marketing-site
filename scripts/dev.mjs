import { spawn } from 'node:child_process';
const source = process.argv.slice(2),
  args = [];
for (let i = 0; i < source.length; i++) {
  const a = source[i];
  if (a === '--strictPort') continue;
  if (a === '--host') {
    args.push('--hostname', source[++i] || '0.0.0.0');
    continue;
  }
  args.push(a);
}
const child = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'dev', '--webpack', ...args], {
  stdio: 'inherit',
  env: process.env,
});
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', (code) => process.exit(code || 0));
