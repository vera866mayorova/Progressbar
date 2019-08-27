function dummy(arg) {
  console.log(arg);
}

$("[type=button]").change(dummy);

console.log("скрипт подгрузился");