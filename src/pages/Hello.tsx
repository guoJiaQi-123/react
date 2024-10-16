/* export default function Hello(props: { msg: string; age?: number }) {
  return (
    <h2>
      {props.msg},我的年龄是：{props.age}
    </h2>
  );
}
 */

export default function Hello({ msg, age = 50 }: { msg: string; age?: number }) {
	return (
		<h2>
			{msg},我的年龄是：{age}
		</h2>
	);
}
