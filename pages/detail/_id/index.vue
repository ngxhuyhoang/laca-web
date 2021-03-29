<template>
  <v-container>
    <v-row>
      <v-col cols="2"></v-col>

      <v-col cols="8">
        <v-sheet rounded="lg">
          <v-carousel v-model="model" height="500">
            <v-carousel-item v-for="(color, i) in 5" :key="i">
              <v-img src="https://picsum.photos/500/500?random=1" />
            </v-carousel-item>
          </v-carousel>

          <v-container>
            <h2>The Coffee House</h2>
            <v-container>
              <v-row class="mt-1">
                <p>Đánh giá:</p>
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                />
              </v-row>
            </v-container>
            <p>
              <v-icon>mdi-map-marker</v-icon>
              Số 1, ngõ 2, Trần Duy Hưng, Hà Nội
            </p>
            <p>
              Địa chỉ quán của cô Xuân ở chợ Ngã Tư Sở, phía góc bên phải cổng
              chợ, nhìn ra là chân cầu vượt. Nổi hứng lên là phải giải quyết nhu
              cầu ngay cùng mấy đứa bạn. Đây là chỗ ăn nộm quen của nhà mình, có
              uy tín và đông khách từ lâu. Nộm bò khô, bánh bột lọc, nộm sứa:
              20k/suất đồng giá. Trà đá 3k/c Đồ ngon vừa vị Tuy nhiên không gian
              quán hẹp và ở chợ gần các quầy đồ sống nên nhiều bạn sẽ ngại ngồi
              lại Có thể gọi đem về nha Mình làm ở Ngã tư sở gần 5 năm và thi
              thoảng lại ghé quán cũng chẳng biết quán có từ bao giờ nữa Rất
              đáng để thử nha các bạn
            </p>

            <v-row class="pt-5 pb-5">
              <v-btn icon large>
                <v-icon>mdi-heart-outline</v-icon>
              </v-btn>
              <v-btn icon large>
                <v-icon>mdi-chat-outline</v-icon>
              </v-btn>
              <v-btn icon large>
                <v-icon>mdi-share-outline</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn large icon @click="snackbar = true">
                <v-icon>mdi-bookmark-outline</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-sheet>

        <v-sheet class="mt-5" rounded="lg">
          <v-container>
            <v-form @submit.prevent>
              <v-text-field
                type="text"
                rounded
                dense
                placeholder="Bình luận"
                filled
              />
            </v-form>

            <h3>5 bình luận</h3>

            <v-card v-for="n in 5" :key="n" elevation="0">
              <v-card-title>
                <v-avatar size="40" class="mr-2">
                  <v-img src="https://i.pravatar.cc/85" />
                </v-avatar>
                Username
              </v-card-title>
              <v-card-text
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                voluptates error saepe cum corrupti, dicta numquam quisquam ad
                hic fuga alias voluptas aliquid! Neque quisquam eveniet veniam,
                laudantium eos nihil, earum illum possimus totam ex deleniti
                commodi praesentium ratione inventore. Doloremque temporibus cum
                facere molestias laudantium alias? Voluptates dolores tempora
                alias non explicabo autem modi a iure, blanditiis, numquam
                doloremque recusandae ipsa, optio dicta odit et. Ullam dolore,
                dolores odit officiis voluptates aperiam! Animi vel iusto
                accusamus assumenda natus debitis deleniti impedit, inventore ut
                necessitatibus incidunt repellendus culpa aliquam sit reiciendis
                corporis omnis neque ipsum tempora, voluptate esse! Numquam,
                sapiente!</v-card-text
              >
            </v-card>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col cols="2"></v-col>
    </v-row>
    <v-snackbar v-model="snackbar"> Đã lưu bài viết </v-snackbar>
  </v-container>
</template>

<script>
export default {
  layout: 'home',
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    snackbar: false,
  }),
}
</script>
