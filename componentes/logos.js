import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  ImageRun,
  Header,
  Footer,
  Table,
  AlignmentType,
} from "docx";

const escudo = fetch(
  'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/republica-ecuador-escudo.png'
  ).then((r) => r.blob())

const senescyt = fetch(
  'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/logo-senescyt.jpeg'
).then((r) => r.blob());

const gobiernodetodos = fetch(
    'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/gobierno-de-todos.png'
).then((r) => r.blob());

  // Colocar los logos en el cabecera de página del Documento: escudo y logo de senescyt 
  // Dirección y logotipo de gobierno

  public createLogoHeaderSenescyt(): Table {
    return new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children: [
                    new ImageRun({
                      data: escudo,
                      transformation: {
                        width: 175,
                        height: 94,
                      },
                    }),
                  ],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.END,
                  children: [
                    new ImageRun({
                      data: senescyt,
                      transformation: {
                        width: 300,
                        height: 32,
                      },
                    }),
                  ],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
          ],
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.NONE,
        },
        bottom: {
          style: BorderStyle.NONE,
        },
        left: {
          style: BorderStyle.NONE,
        },
        right: {
          style: BorderStyle.NONE,
        },
        insideVertical: {
          style: BorderStyle.NONE,
        }
      },
    });
  }

  // Colocar los logos en el pie de página del Documento 
  // Dirección y logotipo de gobierno

  public createLogoFooterSenescyt(): Table {
    return new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  children:[
                    new TextRun({
                      text: "Dirección: Edificio Matriz: Alpallana E7-183 entre Av. Diego de Almagro y Whymper",
                      font: "Arial",
                      size: 12,
                    }),
                  ],
                }),
                new Paragraph({
                  children:[
                    new TextRun({
                      text: "Código Postal: 170518 / Quito - Ecuador",
                      font: "Arial",
                      size: 12
                    }),
                  ]
                }),
                new Paragraph({
                  children:[
                    new TextRun({
                      text: "Teléfono: 593-2 3934-300",
                      font: "Arial",
                      size: 12
                    }),
                  ]
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
            new TableCell({
              children: [
                new Paragraph({
                  alignment: AlignmentType.END,
                  children: [
                    new ImageRun({
                      data: gobiernodetodos,
                      transformation: {
                        width: 190,
                        height: 66,
                      },
                    }),
                  ],
                }),
              ],
              verticalAlign: VerticalAlign.CENTER,
            }),
          ],
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
      borders: {
        top: {
          style: BorderStyle.NONE,
        },
        bottom: {
          style: BorderStyle.NONE,
        },
        left: {
          style: BorderStyle.NONE,
        },
        right: {
          style: BorderStyle.NONE,
        },
        insideVertical: {
          style: BorderStyle.NONE,
        }
      },
    });
  }