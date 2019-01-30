<template>
    <div class="section">
        <h1 class="title">
            ช่องทางการชำระเงิน
        </h1>
        <h2 class="subtitle">
            แบบฟอร์มแจ้งชำระเงิน อยู่ด้านล่าง (ใช้เฉพาะกรณีลูกค้าชำระเงินโดยการโอนเงินเข้าบัญชีธนาคาร)
        </h2>
        <div class="columns">
            <div class="column">
                <table class="table">
                <thead>
                    <tr>
                    <th>ธนาคาร</th>
                    <th>สาขา</th>
                    <th>เลขที่บัญชี</th>
                    <th>ประเภท</th>
                    </tr>
                </thead>

                <tbody>
                <tr v-for="(item, index) in payment" :key="index">
                    <td>{{item.bank}}</td>
                    <td>{{item.branch}}</td>
                    <td>{{item.no}}</td>
                    <td>{{item.type}}</td>
                </tr>
                
                </tbody>
                </table>
            </div>
            <div class="column">โอนเงินเข้าบัญชี
                หากเลือกชำระเงินโดยวิธีโอนเข้าบัญชี ท่านสามารถเลือกธนาคารที่ระบุไว้ด้านล่างนี้ตามความสะดวก <br>
                <b> *** สำคัญ *** เมื่อโอนเงินแล้ว กรุณายืนยันการชำระเงิน โดยใช้แบบฟอร์มข้างล่าง เท่านั้น
                หมายเหตุ: กรุณาเก็บสลิปหลักฐานชำระเงินไว้ จนกว่าจะออกกรมธรรม์เสร็จ </b></div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    data () {
        return {
            payment: [
                {bank: 'ธนาคารกรุงเทพ', branch: '-', no: '390-450-1222', type: 'ออมทรัพย์'},
                {bank: 'ธนาคารกสิกรไทย', branch: '-', no: '033-840-2821', type: 'ออมทรัพย์'},
                {bank: 'ธนาคารกรุงไทย', branch: '-', no: '540-600-3763', type: 'ออมทรัพย์'},
                {bank: 'ธนาคารไทยพาณิชย์', branch: '-', no: '839-211-3339', type: 'ออมทรัพย์'}
            ]
        }
    }
}
</script>

