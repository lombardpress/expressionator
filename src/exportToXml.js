export function exportToXml(state) {

  const witnesses = state.witnessInfo.map((witness) => {
    text = [
    '     <witness id="' + witness.id + '">',
    '       <slug>' + witness.id + '</slug>',
    '       <title>' + witness.title.replace("&", "&amp;") + '</title>',
    '       <initial>' + witness.id + '</initial>',
    '     </witness>'
    ].join("\n")
    return text
  })

  const targetEdf = state.edfListInfo.find((edf) => edf.id === state.edfInfo.id)
  let items = [];
  if (targetEdf.items){
    items = targetEdf.items.map((item) => {
      const title = item.proposedChange ? item.proposedChange.title : item.title;
      const questionTitle = item.proposedChange ? item.proposedChange.questionTitle : item.questionTitle;
      text = [
      '     <item id="' + item.id + '">',
      '       <fileName filestem="' + item.id + '"/>',
      '       <title>' + title + '</title>',
      '       <questionTitle>' + questionTitle + '</questionTitle>',
      '     </item>'
      ].join("\n")
      return text
    })
  }
  var text = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-model href="https://raw.githubusercontent.com/scta/edf-schema/master/src/projectfile.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>',
    '<listofFileNames>',
    '  <header>',
    '    <authorName>' + state.personInfo.title + '</authorName>',
    '    <commentaryName>' + state.edfInfo.title.replace("&", "&amp") + '</commentaryName>',
    '    <commentaryid>' + state.edfInfo.id + '</commentaryid>',
    '    <commentaryslug>' + state.edfInfo.id + '</commentaryslug>',
    '    <alias>' + state.edfInfo.title.replace(/\s+/g, " ") + '</alias>',
    '    <authorUri>http://scta.info/resource/' + state.personInfo.id + '</authorUri>',
    '    <parentUri>http://scta.info/resource/' + state.edfInfo.id + '</parentUri>',
    '    <parentWorkGroup>http://scta.info/resource/uncategorized</parentWorkGroup>',
    '    <textfilesdir>/Users/jcwitt/Projects/scta/scta-texts/' + state.edfInfo.id + '/</textfilesdir>',
    '    <questionListSource/>',
    '    <questionListOriginalEditor/>',
    '    <questionListEncoder/>',
    '    <gitRepoBase type="toplevel">https://github.com/scta-texts/</gitRepoBase>',
    '    <hasWitnesses>',
    witnesses.join("\n"),
    '    </hasWitnesses>',
    '  </header>',
    '  <div id="body">',
    items.join("\n"),
    '  </div>',
    '</listofFileNames>',
].join("\n")
  return text;
}
