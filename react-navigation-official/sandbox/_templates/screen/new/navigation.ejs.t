---
to: src/navigation/<%= navigationParam.file %>
inject: true
before: <%= navigationParam.before %>
skip_if: "{...Screens.<%= fileName %>}"
---
        <<%= navigationParam.tag %> {...Screens.<%= fileName %>} />