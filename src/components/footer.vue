<template>
  <div class="Footer">
    <ul class="FR">
      <li><b>Исполнитель:</b></li>
      <li>Амина Мирзобекова</li>
    </ul>
    <ul class="SR">
      <li><b>Группа:</b></li>
      <li>181-361</li>
    </ul>
    <ul class="FRR">
      <li><b>Контакты:</b></li>
      <li>+7 (977) 271-45-25</li>
    </ul>
    <ul class="FFR">
      <li><b>Ссылки:</b></li>
      <li>
        <a target="blank" href="https://stackoverrun.com/ru/q/12750285"
          >https://stackoverrun.com/ru/q/12750285</a
        >
      </li>
      <li>
        <a target="blank" href="https://router.vuejs.org/ru/"
          >https://router.vuejs.org/ru/</a
        >
      </li>
      <li>
        <a
          target="blank"
          href="https://auto.ru/moskovskaya_oblast/cars/used/?utm_source=google_adwords&utm_medium=cpc&utm_campaign=id-9080109542_place-gsearch_geo-msk-r1_type-legkovye-obshie-used&utm_content=idgr-90988627919_cat-obshie-used-kupit-avto_land-used-list_view_geo-msk-r1&gclid=CjwKCAiAiML-BRAAEiwAuWVggjMiEuMahZle-qgelGGc8G4w8Tes9kJQbr_5G1U6VqRU48p4-yMYmRoCZocQAvD_BwE"
          >Сайт с продажей авто</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Castoro&display=swap");
a {
  text-decoration: none;
  color: black;
}
b {
  color: black;
}
.Footer {
  display: flex;
  justify-content: space-around;
  background: rgb(119, 119, 119);
  border-top: 3px solid black;
  min-height: 200px;
  padding-top: 30px;
}
ul {
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
}

@media (max-width: 700px) {
  .Footer {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul {
    padding: 20px;
  }

  .SR {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }
}
</style>
