<template>
  <v-container>
    <v-sheet rounded="lg" class="a">
      <v-img :src="user.cover" class="cover" />
      <v-avatar size="150" class="avatar">
        <v-img :src="user.avatar" />
      </v-avatar>
      <h1 class="full-name">{{ user.name }}</h1>
      <div class="count mt-5">
        <v-row>
          <v-col cols="6">
            <b>Người theo dõi</b>
            <p>1000</p>
          </v-col>
          <v-col cols="6">
            <b>Đang theo dõi</b>
            <p>1000</p>
          </v-col>
        </v-row>
      </div>
    </v-sheet>

    <v-row class="mt-10">
      <v-col cols="4">
        <v-sheet rounded="lg">
          <v-card elevation="0">
            <v-card-title>Bio</v-card-title>
            <v-card-text>
              across feet got cast die let sense drove suit recognize balloon
              develop fun steep time thing strong building held depend
              frequently tune evidence flew
            </v-card-text>
          </v-card>
          <v-btn elevation="0" class="update-info-button" @click="dialog = true"
            >Cập nhật thông tin</v-btn
          >
        </v-sheet>
      </v-col>
      <v-col cols="8">
        <v-sheet v-for="n in 5" :key="n" rounded="lg" class="mb-5">
          <v-carousel v-model="model" height="400">
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
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="50%" persistent>
      <v-sheet>
        <v-container>
          <h3 class="mb-3">Tiểu sử</h3>
          <v-textarea v-model="bio" height="50" outlined label="bio">
          </v-textarea>
          <v-row>
            <v-spacer />
            <v-btn
              text
              elevation="0"
              class="save-button"
              @click="dialog = false"
              >Cancel</v-btn
            >
            <v-btn
              color="warning"
              elevation="0"
              class="save-button"
              @click="dialog = false"
              >Lưu</v-btn
            >
          </v-row>
        </v-container>
      </v-sheet>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  layout: 'app-layout',
  data: () => ({
    dialog: false,
    bio: '',
    model: false,
  }),
  computed: mapState({
    user: (state) => state.auth.user,
  }),
}
</script>

<style scoped>
.cover {
  width: 100%;
  height: 300px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.avatar {
  position: absolute;
  top: 225px;
  left: 43%;
}

.a {
  position: relative;
}

.full-name {
  margin-top: 100px;
  text-align: center;
}

.count {
  width: 25%;
  margin: 0 auto;
  text-align: center;
}

.update-info-button {
  width: 90%;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
}

.save-button {
  margin-right: 16px;
  margin-bottom: 16px;
}
</style>
