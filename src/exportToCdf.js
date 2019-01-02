export function exportToCdf(wit) {
  const title = wit.proposedChange ? wit.proposedChange.title : wit.title;
  const description = wit.proposedChange ? wit.proposedChange.description : wit.description;
  const manifest = wit.proposedChange ? wit.proposedChange.manifest : wit.manifest;
  var text = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<codex>',
    '  <head>',
    '    <type>manuscript</type>',
    '    <shortid alias="alias">' + wit.id + '</shortid>',
    '    <title>' + title + '</title>',
    '    <initial>P</initial>',
    '    <description>' + description + '</description>',
    '    <hasItems>',
    '      <item>',
    '        <canonical>true</canonical>',
    '        <shortid>' + wit.id + 'cod-dfjq1w/item1' + '</shortid>',
    '        <holdingInstitution>holding institution id goes here</holdingInstitution>',
    '        <libraryRecord>library catalogue url goes here</libraryRecord>',
    '        <canvasBase></canvasBase>',
    '        <manifestOfficial>' + manifest + '</manifestOfficial>',
    '      </item>',
    '    </hasItems>',
    '  </head>',
    '  <surfaces> </surfaces>',
    '</codex>'].join("\n")
    return text;
}
