<template>
    <div>
        <h1>Product</h1><br>
        <div class="container-fluid bg-3 text-center">
            <div class="row">
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">ファニープレゼントアドバイザー</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/funny.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">CNN可視化WEBサイト</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/cnn.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">HIDによるBadUSB</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/badusb.jpg" class="img-responsive img-bordered" style="width:65%" alt="Image">
                    </router-link>
                </div>
            </div><br>
            <div class="row">
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">~ネットワーク可視化ツール~ Packet Street</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/packetstreet.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">学生証在室管理Bot</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/nfc.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">おてがるメディカル</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/medical.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
            </div><br>
            <div class="row">
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">LoRaによる対話システム</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/busstop.png" class="img-responsive img-bordered" style="width:85%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">OpenGL太陽系</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/opengl.png" class="img-responsive img-bordered" style="width:80%" alt="Image">
                    </router-link>
                </div>
                <div class="col-sm-4">
                    <p style="font-size: 18px; margin-bottom: 5px;">NFCタグによる物品管理</p>
                    <router-link to="/product/commingsoon">
                        <img src="@/assets/caravan.png" class="img-responsive img-bordered" style="width:90%" alt="Image">
                    </router-link>
                </div>
            </div>
        </div><br>
    </div>
</template>

<style>
  .img-bordered {
    border: 2px solid #ddd;
    border-radius: 5px;
    padding: 5px;
  }
</style>
