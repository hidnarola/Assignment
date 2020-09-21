<template>
  <div>
    <!-- ROW 2 -->

    <vs-button
      class="mr-3"
      radius
      color="primary"
      icon-pack="feather"
      icon="icon-user-plus"
      :to="{path: '/apps/Home/vendoracc/addnewvendor'}"
    ></vs-button>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          class="mb-base"
          hideChart
          icon="UserIcon"
          icon-right
          statistic="17"
          statisticTitle="Active Vendors"
          color="success"
        />
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="UserIcon"
          icon-right
          statistic="6"
          statisticTitle="Inactive Vendors"
          color="danger"
        />
      </div>

      <div class="vx-col w-full md:w-1/3 lg:w-1/3 xl:w-1/3">
        <statistics-card-line
          hideChart
          class="mb-base"
          icon="UserIcon"
          icon-right
          statistic="23"
          statisticTitle="Total Vendors"
          color="primary"
        />
      </div>
    </div>

    <!-- VENDOR TABLE !-->

    <vx-card>
      <div class="vx-col sm:w-1/3 w-full">
        <datepicker placeholder="Select Date" v-model="date"></datepicker>
      </div>
      <vs-table pagination max-items="5" search :data="userList">
        <template slot="thead">
          <vs-th>Id</vs-th>
          <vs-th>Name</vs-th>
          <vs-th>Type</vs-th>
          <vs-th>Partner Date</vs-th>
          <vs-th>Last Modified</vs-th>
          <vs-th>Status</vs-th>
          <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="tr.id">{{tr.id}}</vs-td>
            <vs-td :data="tr.first_name" class="pr-5">
              <img width="50" height="50" id="hero" :src="tr.created_by.image" alt />
              <span>{{tr.first_name}} {{tr.last_name}}</span>
            </vs-td>
            <vs-td :data="tr.type">{{tr.type}}</vs-td>
            <vs-td :data="tr.partnership_date">{{tr.partnership_date}}</vs-td>
            <vs-td :data="tr.created_by.lastloggedIn">{{tr.created_by.lastloggedIn}}</vs-td>
            <vs-td :data="tr.status">{{tr.status}}</vs-td>
            <div class="dropdown-button-container">
              <vs-dropdown>
                <vs-button radius class="btn-drop" color="primary" type="line" icon="more_horiz"></vs-button>
                <vs-dropdown-menu>
                  <vs-dropdown-item icon-pack="feather" icon="icon-user-plus">View Details</vs-dropdown-item>
                  <vs-dropdown-item>Edit</vs-dropdown-item>
                  <vs-dropdown-item>Deactivate</vs-dropdown-item>
                  <vs-dropdown-item>Delete</vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
            <template class="expand-user" slot="expand">
              <div class="con-expand-users w-full">
                <div class="con-btns-user flex items-center justify-between">
                  <div class="con-userx flex items-center justify-start">
                    <vs-table :data="tr.payable">
                      <template slot="thead">
                        <vs-th>Account's Receiver Name</vs-th>
                        <vs-th>Email</vs-th>
                        <vs-th>Phone</vs-th>
                        <vs-th>Address</vs-th>
                      </template>

                      <vs-tr>
                        <vs-td :data="tr.payable.first_name">
                          <img width="50" height="50" id="hero" :src="tr.created_by.image" alt />
                          <span>{{tr.payable.first_name}} {{tr.payable.last_name}}</span>
                        </vs-td>
                        <vs-td
                          :data="tr.payable.payable_contact.email"
                        >{{tr.payable.payable_contact.email}}</vs-td>
                        <vs-td
                          :data="tr.payable.payable_contact.phone"
                        >{{tr.payable.payable_contact.phone}}</vs-td>
                        <vs-td :data="tr.payable.address">{{tr.payable.address}}</vs-td>
                      </vs-tr>
                    </vs-table>
                  </div>
                </div>
              </div>
            </template>
          </vs-tr>
        </template>
      </vs-table>
    </vx-card>
  </div>
</template>

<script>
import StatisticsCardLine from "@/components/statistics-cards/StatisticsCardLine.vue";
import Datepicker from "vuejs-datepicker";
import { users } from "@/assets/utils/user.js";
export default {
  data() {
    return {
      userList: users,
      date: null
    };
  },
  components: {
    StatisticsCardLine,
    Datepicker
  }
};
</script>

<style scoped>
.mr-3 {
  margin-left: 96%;
  margin-bottom: 10px;
}
#hero {
  display: "inline";
}
</style>