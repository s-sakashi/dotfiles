import { filepaths } from "@fig/autocomplete-generators";

const completionSpec: Fig.Spec = {
  name: "format",
  description:
    "Dotnet format is a code formatter that applies style preferences to a project or solution. Preferences will be read from an .editorconfig file, if present, otherwise a default set of preferences will be used",
  args: {
    name: "project",
    description:
      "The MSBuild project or solution to run code formatting on. If a project or solution file is not specified, MSBuild searches the current working directory for a file that has a file extension that ends in proj or sln, and uses that file",
    isOptional: true,
    generators: filepaths({ extensions: ["csproj", "sln"] }),
  },
  options: [
    {
      name: "--diagnostics",
      description:
        "A space-separated list of diagnostic IDs to use as a filter when fixing code style or third party issues. Default value is whichever IDs are listed in the editorconfig file",
      args: {
        name: "diagnostics",
      },
    },
    {
      name: "--severity",
      description:
        "The minimum severity of diagnostics to fix. Allowed values are info, warn, and error. The default value is warn",
      args: {
        name: "severity",
        isOptional: true,
        default: "warn",
        suggestions: ["info", "warn", "error"],
      },
    },
    {
      name: "--no-restore",
      description:
        "Doesn't execute an implicit restore before formatting. Default is to do implicit restore",
    },
    {
      name: "--verify-no-changes",
      description:
        "Verifies that no formatting changes would be performed. Terminates with a non zero exit code if any files would have been formatted",
    },
    {
      name: "--include",
      description:
        "A space-separated list of relative file or folder paths to include in formatting. All files in the solution or project are formatted if empty",
      args: {
        name: "paths",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--exclude",
      description:
        "A space-separated list of relative file or folder paths to exclude from formatting. The default is none",
      args: {
        name: "paths",
        template: ["folders", "filepaths"],
      },
    },
    {
      name: "--include-generated",
      description: "Formats files generated by the SDK",
    },
    {
      name: ["-v", "--verbosity"],
      description:
        "Sets the verbosity level of the command. Allowed values are q[uiet], m[inimal], n[ormal], d[etailed], and diag[nostic]. Not supported in every command. See specific command page to determine if this option is available",
      args: {
        name: "verbosity",
        suggestions: ["quiet", "minimal", "normal", "detailed", "diagnostic"],
      },
    },
    {
      name: "--binarylog",
      description:
        "Logs all project or solution load information to a binary log file",
      args: {
        name: "log",
        template: "filepaths",
      },
    },
    {
      name: "--report",
      description:
        "Produces a JSON report in the directory specified by <REPORT_PATH>",
      args: {
        name: "path",
        template: "folders",
      },
    },
  ],
};

export default completionSpec;
