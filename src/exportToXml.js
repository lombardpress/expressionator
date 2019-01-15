export function exportToXml(state) {

  const witnesses = state.witnessInfo.map((witness) => {
    let witTitle = ""
    let witDescription = ""
    // first try to get title from witness list using id assigned to working edf
    const targetWit = state.witnessesInfo.find((wit) => wit.id === witness.id)
    if (targetWit){
      witTitle = targetWit.proposedChange ? targetWit.proposedChange.title : targetWit.title;
      witDescription = targetWit.proposedChange ? targetWit.proposedChange.description : targetWit.description;
    }
    // second try to get title from manifestation list assigned to edf received from scta
    //(this is need for non manuscript (born digital) manifestations that do not correlate to a witness in the witness list)
    else{
      const edf = state.edfListInfo.find((edf) => edf.id === state.edfInfo.id)
      const edfWit = edf.manifestations.find((wit) => wit.id === witness.id)
      witTitle = edfWit.proposedChange ? edfWit.proposedChange.title : edfWit.title;
      witDescription = edfWit.proposedChange ? edfWit.proposedChange.description : edfWit.description;
    }
    text = [
    '     <witness id="' + witness.id + '">',
    '       <slug>' + witness.id + '</slug>',
    '       <title>' + witTitle.replace("&", "&amp;") + '</title>',
    '       <initial>' + witness.id + '</initial>',
    '     </witness>'
    ].join("\n")
    return text
  })

  const targetEdf = state.edfListInfo.find((edf) => edf.id === state.edfInfo.id)
  let items = [];
  if (targetEdf.items){
    items = targetEdf.items.map((item) => {
      let witnessesSurfaces = []
      if (item.surfaces){
        const surfaceWitness = item.surfaces.map((s) => {
          return s.witnessId
        })
        const uniqueSurfaceWitness = [...new Set(surfaceWitness)]
        witnessesSurfaces = uniqueSurfaceWitness.map((w) => {
          let surfaces = item.surfaces.map((s) => {
            if (s.witnessId === w){
              return '           <folio>' + s.surfaceId + '</folio>'
            }
          })
          // needed to clear out undefined values from above map
          surfaces = surfaces.filter((item) => item != undefined);
          const witness = [
            '         <witness ref="#' + w + '">',
            surfaces.join("\n"),
            '         </witness>',
          ].join("\n")
          return witness
        })

      }

      const title = item.proposedChange ? item.proposedChange.title : item.title;
      const questionTitle = item.proposedChange ? item.proposedChange.questionTitle : item.questionTitle;
      text = [
      '     <item id="' + item.id + '">',
      '       <fileName filestem="' + item.id + '"/>',
      '       <title>' + title + '</title>',
      '       <questionTitle>' + questionTitle + '</questionTitle>',
      '       <hasWitnesses>',
      witnessesSurfaces.join("\n"),
      '       </hasWitnesses>',
      '     </item>'
      ].join("\n")
      return text
    })
  }
  const person = state.personsInfo.find((p) => p.id === state.personInfo.id)
  const personTitle = person.proposedChange ? person.proposedChange.title : person.title;
  const personDescription = person.proposedChange ? person.proposedChange.description : person.description;
  const edf = state.edfListInfo.find((edf) => edf.id === state.edfInfo.id)
  const edfTitle = edf.proposedChange ? edf.proposedChange.title : edf.title;
  const edfDescription = edf.proposedChange ? edf.proposedChange.description : edf.description;
  var text = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-model href="https://raw.githubusercontent.com/scta/edf-schema/master/src/projectfile.rng" type="application/xml" schematypens="http://relaxng.org/ns/structure/1.0"?>',
    '<listofFileNames>',
    '  <header>',
    '    <authorName>' + personTitle + '</authorName>',
    '    <commentaryName>' + edfTitle.replace("&", "&amp") + '</commentaryName>',
    '    <commentaryid>' + state.edfInfo.id + '</commentaryid>',
    '    <commentaryslug>' + state.edfInfo.id + '</commentaryslug>',
    '    <alias>' + edfTitle.replace(/\s+/g, " ") + '</alias>',
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
