export default function number (number) {
    const formatNumbering = new Intl.NumberFormat("id");
    return (
     formatNumbering.format(number)
     );
  };
  