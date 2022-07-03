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
  TableCell,
  TableRow,
  TableBorders,
  VerticalAlign,
  AlignmentType,
  WidthType,
  BorderStyle,
  TabStopPosition,
  TabStopType,
  TextRun
} from "docx";
import { Alignment } from "docx/build/file/paragraph/formatting/alignment";
const PHONE_NUMBER = "07534563401";
const PROFILE_URL = "https://www.linkedin.com/in/dolan1";
const EMAIL = "docx@docx.com";

const escudo = fetch(
  'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/republica-ecuador-escudo.png'
  ).then((r) => r.blob())

const senescyt = fetch(
  'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/logo-senescyt.jpeg'
).then((r) => r.blob());

const gobiernodetodos = fetch(
    'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/imagenes/gobierno-de-todos.png'
).then((r) => r.blob());

// const contenidoPlantilla = fetch(
//   'https://cdn.jsdelivr.net/gh/markgark/react-ts-vuvib@main/plantillas/resolucion-pib.txt'
// ).then(t => t.text());

const pathPlantilla = 'https://github.com/markgark/react-docx-vuvib-docs/blob/main/plantillas/resolucion-pib.txt';

import archivoPlantilla from 'https://github.com/markgark/react-docx-vuvib-docs/blob/main/plantillas/resolucion-pib.txt';

const contenidoPlantilla = fetch(archivoPlantilla).then(t => t.text());

// var file = new FileReader();
// file.readAsText(e.target.files[0]);

// file.onload = (e) => {
//   contenidoPlantilla = file.result;
//   const strElContenido = elContenido.split("\n\n");
// }

// const exampleFile = async (e) => {
//   e.preventDefault()
//   const file = new FileReader()
//   file.onload = async (e) => { 
//     const text = (e.target.result)
//     console.log(text)
//     alert(text)
//   };
//   file.readAsText(e.target.files[0])
// }


export class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create([identificacion, solicitante, autorizacion, responsables, zonasUbicaciones,laboratoriosDestino, recursos, muestras, experiences, educations, skills, achivements]): Document {
    const document = new Document({
      sections: [
        {
          headers: {
            default: new Header({
              children: [
                this.createLogoHeaderSenescyt(),
              ],
            }),
          },
          footers: {
            default: new Footer({
              children: [
                 this.createLogoFooterSenescyt(),
              ],
            }),
          },
          children: [
            new Paragraph(" "),
            new Paragraph(" "),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children:[
                new TextRun({
                  text: "AUTORIZACION DE MOVILIZACIÓN DE ESPECÍMENES DE ESPECIES DE LA DIVERSIDAD BIOLÓGICA",
                  font: "Arial",
                  size: 20,
                }),
              ]
            }),
            new Paragraph(" "),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children:[
                new TextRun({
                  text: "AUTORIZACION DE COLECTA",
                  font: "Arial",
                  color: "gray", 
                  size: 18,
                }),
              ]
            }),

            new Paragraph(" "), 
            this.createHeading("Identificación"),
            new Paragraph(" "), 
            ...this.etiquetarIdentificacionId(identificacion),
            ...this.etiquetarIdentificacionFecha(identificacion),
            new Paragraph(" "),
            this.createHeading("Solicitante"),
            new Paragraph(" "), 
            ...this.etiquetarSolicitante(solicitante),
            new Paragraph(" "), 
            this.createHeading("Autorización"),
            new Paragraph(" "),
            ...this.etiquetarAutorizacion(autorizacion),
            new Paragraph(" "), 
            this.createHeading("Responsables de las muestras o especímenes a movilizar"),
            new Paragraph(" "),
            this.createTableHeaderReponsables(),
            ...responsables
              .map(responsable => {
                const arr: Paragraph[] = [];
                arr.push(this.createTableResponsable(responsable.id, responsable.nombre, responsable.pais, responsable.transporta));
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            new Paragraph(" "),
            this.createHeading("Ubicación | Origen"),
            new Paragraph(" "),
            ...this.etiquetarProvincia(zonasUbicaciones),
            ...this.etiquetarAreaProtegida(zonasUbicaciones),
            new Paragraph(" "),
            this.createHeading("Ubicación | Destino"),
            new Paragraph(" "),
            ...this.etiquetarLaboratorioDestino(laboratoriosDestino),
            new Paragraph(" "),
            this.createHeading("Material biológico a recolectar/movilizar"),
            new Paragraph(" "),

            ...recursos
              .map(especimen => {
                const arr: Paragraph[] = [];
                arr.push(this.createRecursoHeader(especimen.scientificname));
                arr.push(this.createTableHeaderRecursos());
                arr.push(this.parrrafoBlanco());
                console.log(especimen)

                            //     const bulletPoints = this.splitParagraphIntoBullets(
            //       education.notes
            //     );
            //     bulletPoints.forEach(bulletPoint => {
            //       arr.push(this.createBullet(bulletPoint));
            //     });
                return arr;
              })
              .reduce((prev, curr) => prev.concat(curr), []),
            
            // this.createContactInfo(PHONE_NUMBER, PROFILE_URL, EMAIL),
            // new Paragraph(" "),
            // this.createHeading("Education"),
            // ...educations
            //   .map(education => {
            //     const arr: Paragraph[] = [];
            //     arr.push(
            //       this.createInstitutionHeader(
            //         education.schoolName,
            //         `${education.startDate.year} - ${education.endDate.year}`
            //       )
            //     );
            //     arr.push(
            //       this.createRoleText(
            //         `${education.fieldOfStudy} - ${education.degree}`
            //       )
            //     );

            //     const bulletPoints = this.splitParagraphIntoBullets(
            //       education.notes
            //     );
            //     bulletPoints.forEach(bulletPoint => {
            //       arr.push(this.createBullet(bulletPoint));
            //     });

            //     return arr;
            //   })
            //   .reduce((prev, curr) => prev.concat(curr), []),
            // this.createHeading("Experience"),
            // ...experiences
            //   .map(position => {
            //     const arr: Paragraph[] = [];

            //     arr.push(
            //       this.createInstitutionHeader(
            //         position.company.name,
            //         this.createPositionDateText(
            //           position.startDate,
            //           position.endDate,
            //           position.isCurrent
            //         )
            //       )
            //     );
            //     arr.push(this.createRoleText(position.title));

            //     const bulletPoints = this.splitParagraphIntoBullets(
            //       position.summary
            //     );

            //     bulletPoints.forEach(bulletPoint => {
            //       arr.push(this.createBullet(bulletPoint));
            //     });

            //     return arr;
            //   })
            //   .reduce((prev, curr) => prev.concat(curr), []),
            // this.createHeading("Skills, Achievements and Interests"),
            // this.createSubHeading("Skills"),
            // this.createSkillList(skills),
            // this.createSubHeading("Achievements"),
            // ...this.createAchivementsList(achivements),
            // this.createSubHeading("Interests"),
            // this.createInterests(
            //   "Programming, Technology, Music Production, Web Design, 3D Modelling, Dancing."
            // ),
            // this.createHeading("References"),
            // new Paragraph(
            //   "Dr. Dean Mohamedally Director of Postgraduate Studies Department of Computer Science, University College London Malet Place, Bloomsbury, London WC1E d.mohamedally@ucl.ac.uk"
            // ),
            // new Paragraph("More references upon request"),
            // new Paragraph({
            //   text:
            //     "This CV was generated in real-time based on my Linked-In profile from my personal website www.dolan.bio.",
            //   alignment: AlignmentType.CENTER
            // })
          ]
        }
      ]
    });

    return document;
  }

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

  public crearParrafo(parrafo: string): Paragraph {
    return new Paragraph({
      text: parrafo
    });
  }

  public splitContenido(text: string): string[] {
    return text.split("\n\n");
  }

  public createTableHeaderReponsables(): Table {
    return new Table({
      rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                      new Paragraph("Identificador")
                    ],
                }),
                new TableCell({
                    children: [new Paragraph("Nombres y apellidos")
                  ],
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      children:[
                        new TextRun({
                        text: "Nacionalidad",
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    })
                  ],
                }),
                new TableCell({
                  children: [
                    new Paragraph({
                      children:[
                        new TextRun({
                        text: "Transporta",
                        }),
                      ],
                      alignment: AlignmentType.CENTER,
                    })
                  ],
                }),
            ],
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    });
  }

  public createTableResponsable(id: string, nombre: string, pais:string, transporta: string): Table {
    return new Table ({
        rows: [
                new TableRow({ 
                  children: [
                     new TableCell({
                      children: [
                          new Paragraph({text: id})
                       ],
                     }),
                     new TableCell({
                        children: [
                          new Paragraph({text: nombre})
                        ],
                     }),
                     new TableCell({
                      children: [
                        new Paragraph({
                          children:[
                            new TextRun({
                            text: pais,
                            }),
                          ],
                          alignment: AlignmentType.CENTER,
                        })
                      ],
                     }),                     
                    new TableCell({
                      children: [
                        new Paragraph({
                          children:[
                            new TextRun({
                            text: transporta,
                            }),
                          ],
                          alignment: AlignmentType.CENTER,
                        })
                      ]
                    }),
                  ],  
                }),                    
        ],
        width: {
          size: 100,
          type: WidthType.PERCENTAGE,
        },
      });
    }

  public createTableHeaderRecursos(): Table {
    return new Table({
      rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [
                      new Paragraph("Tipo")
                    ],
                }),
                new TableCell({
                    children: [new Paragraph("Muestra/Lote")
                  ],
                }),
                new TableCell({
                    children: [
                      new Paragraph("Descripción")
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                          alignment: AlignmentType.END,
                          children: [
                            new TextRun({
                              text: "Cantidad",
                            }),
                          ],
                      }),    
                    ],
                }),
            ],
        }),
      ],
      width: {
        size: 100,
        type: WidthType.PERCENTAGE,
      },
    });
  }

  // Contenido de la sección Identificación

  public etiquetarIdentificacionId(identificacion): Paragraph {
    return identificacion.map(
           identificacion => new Paragraph({text: "Id:    " + "\t" + identificacion.id}),
    );
  }

  public etiquetarIdentificacionFecha(identificacion): Paragraph {
    return identificacion.map(
           identificacion => new Paragraph({text: "Fecha: " + "\t" + identificacion.fecha}),
    );
  }

  public etiquetarSolicitante(solicitante): Table {
    return solicitante.map(
           solicitante => new Table ({
              rows: [
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Cédula/Pasaporte: " + "\t" + solicitante.id})
                         ],
                     }),
                  ],
                }),
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Nombre:           " + "\t" + "\t" + solicitante.nombre})
                         ],
                     }),
                  ],
                })
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
                insideHorizontal: {
                  style: BorderStyle.NONE,
                }
              },
           }),
      )  
  }

  public etiquetarAutorizacion(autorizacion): Table {
    return autorizacion.map(
           autorizacion => new Table ({
              rows: [
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Identificador: " })
                         ],
                     }),
                     new TableCell({
                      children: [
                          new Paragraph({text: autorizacion.id})
                       ],
                     }),
                  ],
                }),
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Proyecto: " })
                         ],
                     }),
                     new TableCell({
                        children: [
                          new Paragraph({text: autorizacion.proyecto})
                        ],
                     }),
                  ],
                }),
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Vigencia: " })
                         ],
                     }),
                     new TableCell({
                      children: [
                          new Paragraph({text: autorizacion.vigencia})
                       ],
                     }),                     
                  ],
                }),
                new TableRow({ 
                  children: [
                    new TableCell({
                        children: [
                            new Paragraph({text: "Patrocinador: " })
                         ],
                     }),
                    new TableCell({
                      children: [
                          new Paragraph({text: autorizacion.patrocinador})
                       ],
                   }),                     
                  ],
                })
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
                insideHorizontal: {
                  style: BorderStyle.NONE,
                },
                insideVertical: {
                  style: BorderStyle.NONE,
                }
              },
           }),
      )  
  }

  // Contenido de la sección Ubicaciones

  public etiquetarProvincia(zonasUbicaciones): Paragraph {
    return zonasUbicaciones.map(
           identificacion => new Paragraph({text: "Provincia: " + "\t" + identificacion.nombreProvincia}),
    );
  }

  public etiquetarAreaProtegida(zonasUbicaciones): Paragraph {
    return zonasUbicaciones.map(
           identificacion => new Paragraph({text: "Área Protegida: " + "\t" + identificacion.nombreAreaProtegida}),
    );
  }

  public etiquetarBosqueProtectos(zonasUbicaciones): Paragraph {
    return zonasUbicaciones.map(
           identificacion => new Paragraph({text: "Bosque Protector: " + "\t" + identificacion.nombreBosqueProtector}),
    );
  }

  public etiquetarLaboratorioDestino(laboratoriosDestino): Paragraph {
    return laboratoriosDestino.map(
           identificacion => new Paragraph({text: "Nombre: " + "\t" + identificacion.nombre}),
    );
  }

  public createRecursoHeader(
    especimen: string,
    ): Paragraph {
      return new Paragraph({
        tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
       ],
       children: [
          new TextRun({
              text: especimen,
              font: "Arial",
              size: 20,
              color: "gray",
          }),
       ]
     });
  }

  public createTableMuestra(
    submuestra: string,
    ): Paragraph {
      return new Paragraph({
        tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
       ],
       children: [
          new TextRun({
              text: "....... " + submuestra,
              bold: true,
              italics: true,
              font: "Calibri",
              size: 18,
          }),
       ]
     });
  }

  public  parrrafoBlanco(): Paragraph {
   return new Paragraph({
     children: [
      new TextRun({
          text: " " 
      }),
     ]
   });
  }

  public createContactInfo(
    phoneNumber: string,
    profileUrl: string,
    email: string
  ): Paragraph {
    return new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun(
          `Mobile: ${phoneNumber} | LinkedIn: ${profileUrl} | Email: ${email}`
        ),
        new TextRun({
          text: "Address: 58 Elm Avenue, Kent ME4 6ER, UK",
          break: 1
        })
      ]
    });
  }

  public createHeading(text: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: text,
          bold: true,
        }),
      ],
      heading: HeadingLevel.HEADING_3,
      //thematicBreak: true
    });
  }

  public createSubHeading(text: string): Paragraph {
    return new Paragraph({
      text: text,
      heading: HeadingLevel.HEADING_2
    });
  }

  public createInstitutionHeader(
    institutionName: string,
    dateText: string
  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX
        }
      ],
      children: [
        new TextRun({
          text: institutionName,
          bold: true
        }),
        new TextRun({
          text: `\t${dateText}`,
          bold: true
        })
      ]
    });
  }

  public createRoleText(roleText: string): Paragraph {
    return new Paragraph({
      children: [
        new TextRun({
          text: roleText,
          italics: true
        })
      ]
    });
  }

  public createBullet(text: string): Paragraph {
    return new Paragraph({
      text: text,
      bullet: {
        level: 0
      }
    });
  }

  // tslint:disable-next-line:no-any
  public createSkillList(skills: any[]): Paragraph {
    return new Paragraph({
      children: [new TextRun(skills.map(skill => skill.name).join(", ") + ".")]
    });
  }

  // tslint:disable-next-line:no-any
  public createAchivementsList(achivements: any[]): Paragraph[] {
    return achivements.map(
      achievement =>
        new Paragraph({
          text: achievement.name,
          bullet: {
            level: 0
          }
        })
    );
  }

  public createInterests(interests: string): Paragraph {
    return new Paragraph({
      children: [new TextRun(interests)]
    });
  }

  public splitParagraphIntoBullets(text: string): string[] {
    return text.split("\n\n");
  }

  // tslint:disable-next-line:no-any
  public createPositionDateText(
    startDate: any,
    endDate: any,
    isCurrent: boolean
  ): string {
    const startDateText =
      this.getMonthFromInt(startDate.month) + ". " + startDate.year;
    const endDateText = isCurrent
      ? "Present"
      : `${this.getMonthFromInt(endDate.month)}. ${endDate.year}`;

    return `${startDateText} - ${endDateText}`;
  }

  public getMonthFromInt(value: number): string {
    switch (value) {
      case 1:
        return "Jan";
      case 2:
        return "Feb";
      case 3:
        return "Mar";
      case 4:
        return "Apr";
      case 5:
        return "May";
      case 6:
        return "Jun";
      case 7:
        return "Jul";
      case 8:
        return "Aug";
      case 9:
        return "Sept";
      case 10:
        return "Oct";
      case 11:
        return "Nov";
      case 12:
        return "Dec";
      default:
        return "N/A";
    }
  }
}