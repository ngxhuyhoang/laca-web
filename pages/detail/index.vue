<template>
  <v-container>
    <v-row>
      <v-col cols="3"></v-col>
      <v-col cols="6">
        <v-sheet rounded="lg">
          <v-carousel v-model="model" height="500">
            <v-carousel-item v-for="(color, i) in 5" :key="i">
              <v-img src="https://picsum.photos/500/500?random=1" />
            </v-carousel-item>
          </v-carousel>

          <v-container>
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
          </v-container>
        </v-sheet>
      </v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
  }),
}
</script>
