<template>
  <div class="vx-row">
    <!-- BASIC INFORMATION !-->
    <div class="vx-col md:w-1/4 w-full mb-base">
      <vx-card title="Basic Information">
        <template>
          <vs-divider></vs-divider>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-avatar
                icon-pack="feather"
                icon="icon-user"
                size="118px"
                class="mr-5"
                aria-placeholder="Add Profile Image"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>ID</label>
              <vs-input class="w-full" type="number" v-model="input10" />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>Partner Date</label>
              <datepicker placeholder="Select Date" v-model="date"></datepicker>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>Vendor Type</label>
              <vs-select class="w-full select-large" v-model="vendor_type">
                <vs-select-item
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                  v-for="(item, index) in vendor"
                  class="w-full"
                />
              </vs-select>
            </div>
          </div>
        </template>
      </vx-card>
    </div>

    <!-- ADD NEW VENDOR !-->
    <div class="vx-col xl:w-3/4 w-full mb-2">
      <vx-card title="Add New Vendor">
        <vs-divider></vs-divider>
        <label>
          <strong>Contact Information</strong>
        </label>
        <div class="vx-row mt-5">
          <div class="vx-col sm:w-1/2 w-full mb-2">
            <vs-input
              class="w-full"
              label="First Name"
              placeholder="First Name"
              v-model="first_name"
            />
          </div>
          <div class="vx-col sm:w-1/2 w-full mb-4">
            <vs-input class="w-full" label="Last Name" placeholder="Last Name" v-model="last_name" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="E-mail" placeholder="user@example.com" v-model="email" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="Phone Number(Cell)" type="number" v-model="phone" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="Phone Number(Work)" type="number" v-model="work" />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <label>Country</label>
            <vs-select class="w-full select-large" v-model="country_type">
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in country"
                class="w-full"
              />
            </vs-select>
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input
              icon-pack="feather"
              icon="icon-map-pin"
              class="w-full"
              label="Address"
              type="address"
              v-model="address"
            />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="Unit No." placeholder="Enter Unit No." v-model="unit" />
          </div>
        </div>
        <vs-divider></vs-divider>
        <label>
          <strong>Account Payable Information</strong>
        </label>
        <div class="vx-row">
          <div class="vx-row mt-5 width-100pt pl-5">
            <vx-tooltip text="Address is same as above">
              <vs-switch v-model="switch1" />
            </vx-tooltip>
          </div>

          <label class="mr-2">Address same as above</label>
          &nbsp;
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="E-mail" placeholder="user@example.com" v-model="email" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="Phone Number(Cell)" type="number" v-model="phone" />
          </div>
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <vs-input class="w-full" label="Phone Number(Work)" type="number" v-model="work" />
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full mb-4">
            <label>Status</label>
            <vs-select class="w-full select-large" v-model="status_type">
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in status"
                class="w-full"
              />
            </vs-select>
          </div>
        </div>
        <div class="vx-row">
          <div class="flex items-center">
            <vs-button class="justify-end" type="filled">Create</vs-button>
          </div>
        </div>
      </vx-card>
    </div>

    <!-- ACCOUNT PAYABLE INFO !-->
    <div class="vx-col md:w-1/4 w-full mb-base">
      <vx-card title="Account Payable Info">
        <template>
          <vs-divider></vs-divider>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>Gender</label>
              <div class="btn-group">
                <vs-button type="border" size="large">Male</vs-button>
                <vs-button type="border" size="large">Female</vs-button>
              </div>
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <vs-avatar
                icon-pack="feather"
                icon="icon-user"
                size="118px"
                class="mr-5"
                aria-placeholder="Add Profile Image"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>First Name</label>
              <vs-input
                class="w-full"
                type="name"
                placeholder="Enter First Name"
                v-model="first_name"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>Last Name</label>
              <vs-input
                class="w-full"
                type="name"
                placeholder="Enter Last Name"
                v-model="last_name"
              />
            </div>
          </div>
          <div class="vx-row mb-6">
            <div class="vx-col w-full">
              <label>D.O.B</label>
              <datepicker placeholder="Select Date" v-model="date"></datepicker>
            </div>
          </div>
        </template>
      </vx-card>
    </div>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
export default {
  data() {
    return {
      date: null,
      switch1: true,
      vendor: [
        { text: "Vendor1", value: "vendor-1" },
        { text: "Vendor2", value: "vendor-2" }
      ],
      country: [
        { text: "India", value: "india" },
        { text: "US", value: "us" }
      ],
      status: [
        { text: "Active", value: "active" },
        { text: "Inactive", value: "inactive" }
      ],
      vendor_type: "",
      country_type: ""
    };
  },
  components: {
    Datepicker
  }
};
</script>
<style scoped>
.mr-5 {
  margin-left: 57px;
}
.btn-group {
  margin-top: 20px;
  margin-left: 15px;
}
.width-100pt {
  width: 100%;
}
.justify-end {
  margin-top: 30px;
  margin-left: 680px;
}
.mr-2 {
  margin-left: 63px;
  margin-top: -1.6rem;
}
</style>