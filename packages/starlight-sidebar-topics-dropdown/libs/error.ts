import { AstroError } from "astro/errors";

const issueUrl =
  "https://github.com/trueberryless-org/starlight-sidebar-topics-dropdown/issues/new";

export function throwPluginError(message: string, hint?: string): never {
  const hintHeader = "See the error report above for more informations.";
  const hintFooter = `\n\nIf you believe this is a bug, please file an issue at ${issueUrl}`;

  throw new AstroError(
    message,
    hint ? `${hint}${hintFooter}` : `${hintHeader}${hintFooter}`
  );
}
