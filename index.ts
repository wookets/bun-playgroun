import { CliVars, EnvVars } from "./types";


function parseEnvVars(): EnvVars {
  return {
    MEMORY: process.env.MEMORY || "",
    EXAMPLES: process.env.EXAMPLES || ""
  }
}

function parseCliVars(): CliVars {
  return {
    url: process.argv[2]
  }
}

function main() {
  const env = parseEnvVars()
  const cli = parseCliVars()

  console.log('env', env)
  console.log('cli', cli)
}

main()