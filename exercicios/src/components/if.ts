export default function If(props: any) {
  if (props.teste) {
    return props.children;
  } else {
    return false;
  }
}
