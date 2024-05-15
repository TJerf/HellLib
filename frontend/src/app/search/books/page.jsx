import CollapsibleTable from "@/components/CollapsibleTable";
import { enToFaDigit } from "@/helpers";

export default function Home() {
  function createData(name, writer, publisher, copies) {
    return {
      name,
      writer,
      publisher,
      copies: enToFaDigit(copies.toString()),
      history: [
        {
          studentName: "محمد",
          studentLastName: "سومبول",
          studentClassroom: "۱۱۴",
          studentID: "۰۹۸۷۶۵۴۳۲۱",
          repossessionDate: "۱۴۰۳-۱۱-۰۵",
        },
        {
          studentName: "قاسم",
          studentLastName: "ابدخافی",
          studentClassroom: "۱۱۵",
          studentID: "۱۲۳۴۵۶۷۸۹۰",
          repossessionDate: "۱۴۰۳-۰۶-۱۷",
        },
      ],
    };
  }

  const rows = [
    createData("روزی روزگاری قلمبه", "قلمبه", "انتشارات قلمبه", "۲۴"),
    createData("روزی روزگاری تلمبه", "تلمبه", "انتشارات تلمبه", "۳۷"),
    createData("روزی روزگاری سلمبه", "سلمبه", "انتشارات سلمبه", "۲۵"),
    createData("روزی روزگاری ملمبه", "ملمبه", "انتشارات ملمبه", "۶۷"),
    createData("روزی روزگاری فلمبه", "فلمبه", "انتشارات فلمبه", "۴۹"),
    createData("روزی روزگاری شلمبه", "شلمبه", "انتشارات شلمبه", "۵۰"),
    createData("روزی روزگاری ذلمبه", "ذلمبه", "انتشارات ذلمبه", "۵۵"),
  ];

  return <CollapsibleTable rows={rows} />;
}
