<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import { storeToRefs } from 'pinia';

import UserCard from '~/components/UserCard.vue';
import { useUserStore } from '~/store/user';

const store = useUserStore();
const { userList } = storeToRefs(store);
const date = ref(new Date());
const dialogOpen = ref(false);
const format = 'dd/MM/yyyy';

const formData = reactive({
  id: 0,
  firstname: 'Morgan',
  lastname: 'Mastrangelo',
  address: 'Saint Petersburg, FL',
  phone: '+1 727 300 2593',
  email: 'mmastrangelo1120@gmail.com',
  date,
  usertype: 'Regular',
});

function resetForm() {
  formData.id = 0;
  formData.firstname = '';
  formData.lastname = '';
  formData.address = '';
  formData.phone = '';
  formData.email = '';
  formData.date = new Date();
  formData.usertype = 'Regular';
}

function setForm(change: any) {
  formData.id = change.id;
  formData.firstname = change.firstname;
  formData.lastname = change.lastname;
  formData.address = change.address;
  formData.phone = change.phone;
  formData.email = change.email;
  formData.date = change.date;
  formData.usertype = change.usertype;
}

function setId(id: number) {
  formData.id = id;
  dialogOpen.value = true;
}

function handleSubmit(): void {
  if (formData.id > 0) {
    store.updateUser(formData);
  } else {
    store.createUser(formData);
  }
  resetForm();
}

function closeDialog() {
  dialogOpen.value = false;
}

function removeUser() {
  dialogOpen.value = false;
  store.deleteUser(formData.id);
}
</script>

<template>
  <VContainer class="tw-flex tw-h-screen">
    <div class="tw-flex tw-flex-col tw-w-full tw-pt-4 tw-pb-4">
      <div class="tw-flex tw-justify-between tw-items-center tw-w-full tw-mb-6">
        <h1
          class="tw-font-bold tw-text-3xl"
          style="color: #1A989B;"
        >
          DEV
          <span
            class="tw-font-light"
            style="color: #1FB7BA;"
          >.test</span>
        </h1>
        <VBtn
          color="primary"
          variant="outlined"
        >
          John Doe
          &nbsp;<VIcon icon="mdi-account" />
        </VBtn>
      </div>

      <div class="tw-flex tw-w-full tw-h-full">
        <div class="tw-flex tw-w-full tw-h-full tw-pr-8">
          <VForm
            class="tw-flex tw-flex-col tw-justify-between tw-w-full tw-h-full"
            @submit.prevent="handleSubmit"
          >
            <div class="tw-w-full tw-h-full">
              <h1 class="tw-font-bold tw-text-lg">
                Please fill the form.
              </h1>
              <VTextField
                v-model="formData.firstname"
                label="First Name"
                variant="outlined"
                class="tw-mt-4"
              />
              <VTextField
                v-model="formData.lastname"
                label="Last Name"
                variant="outlined"
              />
              <VTextField
                v-model="formData.address"
                label="Address"
                variant="outlined"
              />
              <VTextField
                v-model="formData.phone"
                label="Phone"
                variant="outlined"
              />
              <VTextField
                v-model="formData.email"
                label="Email"
                variant="outlined"
              />
              <VTextField
                v-model="date"
                label="Birth Date"
                variant="outlined"
              >
                <VueDatePicker
                  v-model="date"
                  :format="format"
                  input-class-name="transparent"
                  hide-input-icon
                />
              </VTextField>
              <VSelect
                v-model="formData.usertype"
                label="User Type"
                :items="['Regular', 'Impulsif']"
                variant="outlined"
              />
            </div>
            <VBtn
              color="primary"
              variant="flat"
              size="x-large"
              type="submit"
            >
              Submit
            </VBtn>
          </VForm>
        </div>

        <div class="tw-flex tw-flex-col tw-w-full tw-h-full tw-pl-8">
          <div class="tw-flex tw-flex-col tw-w-full tw-h-full tw-bg-gray-100 tw-p-8 tw-rounded-2xl tw-box-border">
            <h1 class="tw-font-bold tw-text-lg tw-mb-8">
              Meet our team...
            </h1>
            <div class="tw-w-full tw-h-full tw-box-border tw-overflow-auto">
              <UserCard
                v-for="(user) in userList"
                :key="user.id"
                :data="user"
                @change="(change) => setForm(change)"
                @delete="(data) => setId(data.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <VDialog
      v-model="dialogOpen"
      width="auto"
    >
      <div class="tw-flex tw-flex-col tw-justify-center tw-items-center tw-w-96 tw-bg-white tw-p-8">
        <img
          alt="question"
          src="~/assets/image/info.png"
          width="72"
          height="72"
        >
        <h1 class="tw-font-bold tw-text-center tw-text-xl tw-mt-4 tw-mb-12">
          Do you really want to delete this customer?
        </h1>
        <div class="tw-flex tw-justify-between tw-w-full">
          <VBtn
            variant="outlined"
            size="large"
            class="tw-w-5/12"
            @click="closeDialog"
          >
            No
          </VBtn>
          <VBtn
            color="primary"
            variant="flat"
            size="large"
            class="tw-w-5/12"
            @click="removeUser"
          >
            Yes
          </VBtn>
        </div>
      </div>
    </VDialog>
  </VContainer>
</template>
